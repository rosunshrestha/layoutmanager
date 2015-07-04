class FileOperation

  require 'fileutils'
  # Writes the content to the file
  #
  # @param [String] path which is the path for the file
  # @param [String] content which is the content to be written in the file
  def self.write path, content
    File.write(path, content, mode:'a')
  end

  def self.destroy path
    FileUtils.rm(path)
  end

  def self.generate_necessary_files
    FileUtils.mkdir_p(CommonConstants::LAYOUT_DIR_PATH)
    FileUtils.mkdir_p(CommonConstants::CSS_DIR_PATH)
    FileUtils.mkdir_p(CommonConstants::JS_DIR_PATH)
    FileUtils.mkdir_p(CommonConstants::IMAGES_DIR_PATH)
    FileUtils.touch(CommonConstants::CSS_INDEX_PATH)
    FileUtils.touch(CommonConstants::JS_INDEX_PATH)
    FileUtils.touch(CommonConstants::IMAGES_INDEX_PATH)
  end

  def self.delete_existing_file
    if File.exist?(CommonConstants::LAYOUT_DIR_PATH)
      FileUtils.rm_rf(CommonConstants::LAYOUT_DIR_PATH)
    end
    if File.exist?(CommonConstants::OUTPUT_PATH)
      destroy(CommonConstants::OUTPUT_PATH)
    end
  end



  # Writes previous content to the html before adding layout
  #
  def self.generate_before_html
    File.write(CommonConstants::HTML_PATH + $global_path + '.html', "<!DOCTYPE html>
<html>
<head lang='en'>
    <meta charset='UTF-8'>
    <title>Layout</title>
    <link rel='stylesheet' type='text/css' href='css/layout.css'>
</head>
<body>\n", mode:'a')
  end

  # writes content to the html after adding layout
  #
  def self.generate_after_html
    File.write(CommonConstants::HTML_PATH + $global_path + '.html', "</body>
</html>\n", mode:'a')
  end
end
