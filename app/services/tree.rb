module Tree
  class Node
    attr_accessor :class_name, :css_attributes,:child_content
    # count the total instances created for Node class i.e class variable
    @@count = 0
    $current_tab = ""

    # initializes the instance for the for the object
    #
    # @param [String] name which is the classname for the Node
    # @param [Hash] attributes which the css attributes for the Node
    # @param [Array] child which is the array of Node i.e child for the current Node
    #
    def initialize name, attributes, child
      @class_name = name
      @css_attributes = attributes
      @child_content = child
      @@count = @@count + 1
    end

    # gives the total number of instances created
    #
    # @return [Fixnum] total number of object created fot the Node class
    def self.count
      @@count
    end

    # traverse the data in the node  post order
    #
    def traverse
      html_content = "#{$current_tab}<div class='#{class_name}'>\n"
      FileOperation.write(CommonConstants::HTML_PATH + $global_path + '.html', html_content)
      if child_content
        $current_tab << "    "
        child_content.each do |child|
          child.traverse
        end
        $current_tab.chomp!("    ")
      end
      html_content = "#{$current_tab}</div>\n"
      FileOperation.write(CommonConstants::HTML_PATH + $global_path + '.html', html_content)
    end
 end
end
