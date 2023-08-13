import { Route, Routes } from "react-router-dom";
import LazyLoad from "@lazy/lazyLoading";
import Carousel from './components/Carousel'

import Home from './Home'
import Listproduct from "../product/Listproduct";
import Detail from "../product/Detail";
import Test from "../product/test"
import Carts from "../product/Carts";
import GioHangDropdown from "../product/test1/test";
import Payment from "../product/Payments";
import Receipts from "../product/Receipts";
export default (
  <Route path="/" element={<Home />}>
    <Route path="/" element={<Carousel />}></Route>
    <Route path="/:type" element={<Listproduct />}></Route>
    <Route path="/all" element={<Listproduct />}></Route>

    <Route path="/products/:id" element={<Detail />}></Route>
    <Route path="/test3/:id" element={<Test />}></Route>

    <Route path="/carts" element={<Carts />}></Route>
    <Route path="/test" element={<GioHangDropdown />}></Route>
    <Route path="/payment" element={<Payment />}></Route>
    <Route path="/receipts" element={<Receipts />}></Route>

  </Route>
);
