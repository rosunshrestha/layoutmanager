class FileOperation

  # Writes the content to the file
  #
  # @param [String] path which is the path for the file
  # @param [String] content which is the content to be written in the file
  def self.write path, content
    File.write(path, content, mode:'a')
  end

  # Writes previous content to the html before adding layout
  #
  #
  #
  def self.generate_before_html
    File.write(CommonConstants::HTML_PATH, "<!DOCTYPE html>
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
  #
  #
  def self.generate_after_html
    File.write(CommonConstants::HTML_PATH, "</body>
</html>\n", mode:'a')
  end

end