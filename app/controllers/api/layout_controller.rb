class Api::LayoutController < ApplicationController

  # api for generating file in client side
  #
  # @url api/layout/generate
  # @method GET
  def generate
    root = Tree::Node.new('parent',{'height'=> '250px','width'=> '500px', 'background' => 'blue'},
                          [Tree::Node.new('first-child', {'height' => '240px', 'width' => '150px','background' => 'red', 'float' => 'left'}, nil),
                           Tree::Node.new('second-child', {'height' => '240px', 'width' => '150px','background' => 'green', 'float' => 'left'},
                                          [Tree::Node.new('second-grand-child',{'height' => '125px','width' => '50px','background' => 'black', 'float' => 'left'},nil)]),
                           Tree::Node.new('third-child', {'height' => '240px','width' => '50px','background' => 'yellow', 'float' => 'left'}, nil)])
    FileOperation.generate_before_html
    root.traverse
    FileOperation.generate_after_html
    render json: true
  end

end
