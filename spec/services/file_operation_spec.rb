require 'rails_helper'

describe FileOperation do
  describe '.write' do
    filePath = "#{Rails.root}/spec/fixtures/file.txt"

    it 'should write to the files' do
      text = Faker::Lorem.sentence
      FileOperation.write(filePath, text)
      expect(File.read(filePath)).to include text
    end

    after do
      FileUtils.rm_rf(filePath)
    end
  end
end
