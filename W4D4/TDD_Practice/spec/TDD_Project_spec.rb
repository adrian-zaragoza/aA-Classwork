require 'TDD_Project.rb'

describe "#my_uniq" do 
    let(:tester) {[1, 1, 2, 3]}
    it "removes duplicates" do
        
        expect(tester.my_uniq).to_eql([1, 2, 3])
         
    end 
end