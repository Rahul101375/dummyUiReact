import * as React from 'react';
import { Route, Routes,BrowserRouter}  from 'react-router-dom';
import  CartComponent  from '../components/smartComponent/Cart';
import  CommentComponent  from '../components/smartComponent/Comments';
import  ImageComponent  from '../components/smartComponent/Images';
import  PostsComponent  from '../components/smartComponent/Posts';
import  ProductsComponent  from '../components/smartComponent/Product';
import  QuotesComponent  from '../components/smartComponent/Quotes';
import  RecipesComponent  from '../components/smartComponent/Recipes';
import  TodoComponent  from '../components/smartComponent/Todo';
import HeaderComponent from '../components/dumpComponent/Header';

export default function RouterComponent(){
    return (
        <>
          <BrowserRouter>
          <HeaderComponent/>
            <Routes>
                <Route path="carts" element={<CartComponent />}/>
                <Route path="comments" element={<CommentComponent />}/>
                <Route path="images" element={<ImageComponent />}/>
                <Route path="posts" element={<PostsComponent />}/>
                <Route path="products" element={<ProductsComponent />}/>
                <Route path="quotes" element={<QuotesComponent />}/>
                <Route path="recipes" element={<RecipesComponent />}/>
                <Route path="todo" element={<TodoComponent />}/>
            </Routes>
          </BrowserRouter>
        </>
    )
}