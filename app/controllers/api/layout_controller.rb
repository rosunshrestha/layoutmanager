class Api::LayoutController < ApplicationController

  skip_before_filter :verify_authenticity_token
  # api for generating file in client side
  #
  # @url api/layout/generate
  # @method POST
  def generate
    FileOperation.delete_existing_file
    root = Tree::Node.new('parent',{'height'=> '250px','width'=> '500px', 'background' => 'blue'},
                          [Tree::Node.new('first-child', {'height' => '240px', 'width' => '150px','background' => 'red', 'float' => 'left'}, nil),
                           Tree::Node.new('second-child', {'height' => '240px', 'width' => '150px','background' => 'green', 'float' => 'left'},
                                          [Tree::Node.new('second-grand-child',{'height' => '125px','width' => '50px','background' => 'black', 'float' => 'left'},nil)]),
                           Tree::Node.new('third-child', {'height' => '240px','width' => '50px','background' => 'yellow', 'float' => 'left'}, nil)])
    FileOperation.generate_before_html
    root.traverse
    FileOperation.generate_after_html
   render json: {url: download_link_api_layout_index_path}
  end

  def download_link
    ZipFileDownloader::download
    send_file Rails.root.join('public', 'layout.zip'), :type=>"application/zip", :x_sendfile=>true
  end

end
