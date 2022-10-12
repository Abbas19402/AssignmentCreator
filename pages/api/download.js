var async = require("async");
var request = require("request");
var archiver = require("archiver");

export default (req, res) => {
  
  // name of final zip file
  const zipFileName = "downloads.zip";

  // check for "files" in request body
  if (req.body.files == undefined || req.body.files == "") {
    outputError(res);
    return;
  }

  // split up files
  let filesArray = req.body.files.split(",");

  // check if files is an array
  if (!Array.isArray(filesArray)) {
    outputError(res);
    return;
  }

  // prepend every file with the base url of the remote server
  // this assumes REMOTE_URL is set as an environment variable
  filesArray = filesArray.map(f => process.env.REMOTE_URL + f);

  // set content-disposition header
  res.setHeader("content-disposition", "attachment; filename=" + zipFileName);

  // zip them files
  zipURLs(filesArray, res);
};

/**
 * Zip files and send it as response
 * @param urls {array} files to zip
 * @param outStream the response object
 */
function zipURLs(urls, outStream) {
  var zipArchive = archiver.create("zip");

  async.eachLimit(urls, 3,
    function(url, done) {
      try {
        var stream = request.get(url);
      } catch (error) {
        outputError(outStream);
        return;
      }

      stream
        .on("error", function(err) {
          return done(err);
        })
        .on("end", function() {
          return done();
        });

      // Use the last part of the URL as a filename within the ZIP archive.
      zipArchive.append(stream, { name: url.replace(/^.*\//, "") });
    },
    function(err) {
      if (err) throw err;
      zipArchive.pipe(outStream);
      zipArchive.finalize();
    }
  );
}

/**
 * Output 404 Error
 * @param res 
 */
function outputError(res) {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.write("<h1>Whoops, something went wrong</h1>");
  res.end();
}