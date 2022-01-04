import { useEffect, useState } from "react";
import { formatPrice } from '../../utils';
import { FaCheck } from 'react-icons/fa';
import * as S from './styles';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productsActions } from "../../store/productsSlice";
import { searchFiltersActions } from "../../store/searchFiltersSlice";

const Sidebar = () => {

    const dispatch = useDispatch();
    const { searchFilters, maxPrice, userFilters } = useSelector(state => state.searchFilters);

    const defineUserFilters = e => {
        const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        console.log(val);
        dispatch(searchFiltersActions.updateSearchFilters({ ...userFilters, [e.target.name]: val }));
    };

    const clearFilters = () => dispatch(searchFiltersActions.resetFilters(maxPrice));

    return (
        <S.Sidebar>
            <form action="" onSubmit={e => e.preventDefault()}>
                <S.SearchInput name="search" type="text" placeholder="Search product" value={userFilters.search} onChange={defineUserFilters} />
            </form>
            <div>
                <S.FilterTitle>Category</S.FilterTitle>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {searchFilters.categories?.map(category => <button key={Math.random()} name="category" value={category} onClick={defineUserFilters} style={{ border: "none", backgroundColor: category === userFilters.category ? "lightgrey" : "transparent", textTransform: "capitalize", cursor: "pointer", fontSize: ".95rem", padding: ".5rem 0" }}>{category}</button>)}
                </div>
            </div>
            <div>
                <S.FilterTitle>Colors</S.FilterTitle>
                <div style={{ display: "flex", alignItems: "center" }}>
                    {searchFilters?.colors.map(color => <button key={Math.random()} name="colors" value={color} onClick={defineUserFilters} style={{ opacity: color === userFilters.colors ? "1" : ".65", border: "none", textTransform: "capitalize", display: "inline-block", backgroundColor: color === "all" ? "transparent" : color, height: "20px", width: "20px", cursor: "pointer", borderRadius: color !== "all" && "50px", marginRight: ".25rem", fontSize: color === "all" && ".95rem", fontWeight: color === "all" && 500 }}>{color === "all" && color || (userFilters.colors === color && <FaCheck style={{ fill: "white", height: "8px" }} />)}</button>)}
                </div>
            </div>
            <div>
                <S.FilterTitle>Company</S.FilterTitle>
                <select name="company" id="" value={userFilters.company} onChange={defineUserFilters} style={{ width: "100%", height: "2rem", cursor: "pointer", outline: "none" }}>
                    {searchFilters?.companies.map(company => <option key={Math.random()}>{company}</option>)}
                </select>
            </div>
            <div>
                <S.FilterTitle>Price</S.FilterTitle>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>{formatPrice(0)}</p>
                    <p>{formatPrice(userFilters.price)}</p>
                </div>
                <input style={{ width: "100%", cursor: "pointer" }} type="range" min="0" max={Math.max(...searchFilters?.prices)} step="1" value={userFilters.price} onChange={defineUserFilters} name="price" />
            </div>
            <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
                <label htmlFor="shipping" style={{ position: "relative" }}>Free Shipping</label>
                {/* <S.HiddenCheckbox type="checkbox" id="shipping" name="shipping" checked={userFilters.shipping} onChange={defineUserFilters} /> */}
                <S.Checkbox type="checkbox" id="shipping" name="shipping" checked={userFilters.shipping} onChange={defineUserFilters}></S.Checkbox>
            </div>
            <S.ClearBtn onClick={clearFilters} style={{ cursor: "pointer", width: "100%" }}>Clear Filters</S.ClearBtn>
        </S.Sidebar>
    )
};

export default Sidebar;