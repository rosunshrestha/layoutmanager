class ZipFileDownloader
  require 'rubygems'
  require 'zip'
  require 'fileutils'

  # download all the layouts content in a zip file
  def self.download
    directoryToZip = CommonConstants::DIRECTORY_TO_ZIP_PATH
    outputFile = CommonConstants::OUTPUT_PATH
    zf = ZipFileGenerator.new(directoryToZip, outputFile)
    zf.write()
  end
end
