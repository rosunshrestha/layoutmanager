class Api::LayoutController < ApplicationController

  skip_before_filter :verify_authenticity_token

  $root = nil
  $global_path = ''

  # api for generating file in client side
  #
  # @url api/layout/generate
  # @method POST
  def generate
    layouts = params[:_json]
    layouts.count.times do |layout|
      generate_layout(layouts[layout])
      $global_path = params[:_json][layout][:className]
      generate_layouts_in_files
    end
    render json: { url: download_api_layout_index_path }
  end

  def download
    ZipFileDownloader::download
    send_file Rails.root.join('public', 'layout.zip'), type: "application/zip", x_sendfile: true
  end

  private

  def generate_layouts_in_files
    FileOperation.delete_existing_file
    FileOperation.generate_necessary_files
    FileOperation.generate_before_html
    $root.traverse
    FileOperation.generate_after_html
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
end
