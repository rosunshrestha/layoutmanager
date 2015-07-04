class Api::LayoutController < ApplicationController

  skip_before_filter :verify_authenticity_token

  $root = nil
  $global_path = ''
  $css_info = nil

  # api for generating file in client side
  #
  # @url api/layout/generate
  # @method POST
  def generate
    layouts = params[:layout_info]
    FileOperation.delete_existing_file
    layouts.count.times do |layout|
      generate_layout(layouts[layout])
      $global_path = params[:layout_info][layout][:className]
      generate_layouts_in_files params[:css_info]
    end
    render json: { url: download_api_layout_index_path }
  end


  def download
    ZipFileDownloader::download
    send_file Rails.root.join('public', 'layout.zip'), type: "application/zip", x_sendfile: true
  end

  private

  def generate_layouts_in_files css_info
    FileOperation.generate_necessary_files
    FileOperation.generate_before_html
    $root.traverse
    FileOperation.generate_after_html
    css_content = "#{generate_css(css_info)}\n\n"
    FileOperation.write(CommonConstants::CSS_PATH, css_content)
  end

  def get_child_tree children
    array = []
    if children.nil?
      return nil
    end
    children.each do |child|
      array.push(Tree::Node.new(child[:className], child[:css], get_child_tree(child[:child])))
    end
    array
  end

  def generate_layout layout
    unless layout[:child].nil?
      $root = Tree::Node.new(layout[:className], layout[:css], get_child_tree(layout[:child]))
    else
      $root = Tree::Node.new(layout[:className], layout[:css], nil)
    end
  end


  private

  # provides all necessary css content in hash to be written in css file
  #
  # @param [Hash] css_attr all necessary css attributes with it's value
  # @return [String] returns the css for the current class in string format
  def generate_css css_attr
    attributes = ""
    css_attr.each do |key,value|
      attributes<<".#{key}{\n"
      value.each do |attr,attrValue|
        attributes << "#{attr}: #{attrValue};\n"
      end
      attributes << "}\n\n"
    end
    attributes
  end

end
