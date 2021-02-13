# def anagram?(str_1,str_2)
#     str1 = str_1.split('')
#     str2 = str_2.split('')
#     anagram = []
#     anagram = str2.permutation(str1.length).to_a
#     anagram.include?(str1)
#     p anagram.length
# end
#Big: O(n ^ 2)

# p anagram?("gizmo", "sally")    #=> false
# p anagram?("elvis", "lives")    #=> true

def anagram?(str_1, str_2)
    str1 = str_1.split("") #n
    str2 = str_2.split("") #n

    str1.each do |ele| #n
        index = str2.find_index(ele) #n
        if !index.nil?
        str2.delete_at(index) #n
        end
    end

    str2.empty?
end

p anagram?("gizmo", "sally")    #=> false
p anagram?("elvis", "lives")  #true
#O(n ^ 2)

def third_anagram?(str_1, str_2)
    
end