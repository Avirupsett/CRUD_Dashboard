import Fuse from 'fuse.js'
import list from'../data/list.json' 
export default function searchpattern(pattern) {
    const options = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
          "title",
          "content"
        ]
      };
      
      const fuse = new Fuse(list, options);
      
      
      return fuse.search(pattern)
    
}