import {useState} from "react";
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([newCategory, ...categories]);
        //setCategories( [...categories, 'Ranma 1/2'] );
        //setCategories( cat => [...cat, 'Ranma/12'])
    };

    return(
      <>
          <h1>GifExpertApp</h1>

          <AddCategory
              onNewCategory={value => onAddCategory(value)}
          />

          {
              categories.map( category => <GifGrid key={category} category={category}/>)
          }

      </>
    );
};