impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len(){
            return false;
        }

        let mut s_counter = HashMap::new();
        let mut t_counter = HashMap::new();

        for (s_el, t_el) in s.bytes().zip(t.bytes()){
            *s_counter.entry(s_el).or_insert(0) += 1;
            *t_counter.entry(t_el).or_insert(0) += 1;
        }

        s_counter == t_counter
    }
}
