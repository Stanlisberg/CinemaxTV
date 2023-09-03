// import { createContext, useState } from "react";


// interface SearchInter { 
//     children: React.ReactNode;
//   };

// interface SearchContextProps {
//     inputData: string;
//     setInputData: React.Dispatch<React.SetStateAction<string>>;
// }

// const SearchContext = createContext<SearchContextProps | undefined>(undefined);

// export const SearchProvider = ({ children }: SearchInter) => {
//     const [searchItem, setSearchItem] = useState<string>('')


//     return(
//         <SearchContext.Provider value={{ searchItem, setSearchItem}}>
//          {children}
//         </SearchContext.Provider>

//     )
// }

// export default SearchContext;