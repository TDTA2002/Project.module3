import { Route, Routes } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";
import Carousel from './components/Carousel'

import Home from './Home'
import Listproduct from "../product/Listproduct";
import Detail from "../product/Detail";

export default (
  <Route path="/" element={<Home />}>
    <Route path="/" element={<Carousel />}></Route>
    <Route path="/:type" element={<Listproduct />}></Route>
    <Route path="/products/:id" element={<Detail />}></Route>
  </Route>
);
