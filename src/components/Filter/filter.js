import React, { useState } from 'react';
import "./filter.css";

const Filter = () => {
    const [data, setData] = useState([
        { id: 1, name: 'foo', city: 'dallas', category: 'one', type: 'A', active: false },
        { id: 2, name: 'bar', city: 'dallas', category: 'one', type: 'B', active: false },
        { id: 3, name: 'jam', city: 'san francisco', category: 'one', type: 'B', active: true },
        { id: 4, name: 'jane', city: 'denver', category: 'two', type: 'C', active: false },
    ]);

    const [filter, setFilter] = useState({
        city: '',
        category: '',
        type: '',
        active: '',
        name: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
    };

    const filteredData = data.filter((item) => {
        return (
            (filter.city === '' || item.city === filter.city) &&
            (filter.category === '' || item.category === filter.category) &&
            (filter.type === '' || item.type === filter.type) &&
            (filter.active === '' || item.active === (filter.active === 'true')) &&
            (filter.name === '' || item.name.toLowerCase().includes(filter.name.toLowerCase()))
        );
    });

    return (
        <div className='container'>
            <h1>Data Table</h1>
            <div className='filter-container'>
                <div className='switch_btn'>
                    <label htmlFor="city">City</label>
                    <div className="toggle-container">
                        <label htmlFor="dallas">
                            <input
                                type="checkbox"
                                id="dallas"
                                name="city"
                                value="dallas"
                                onChange={handleChange}
                            />
                            <span className="toggle"></span>
                            Dallas
                        </label>
                        <label htmlFor="sanfrancisco">
                            <input
                                type="checkbox"
                                id="sanfrancisco"
                                name="city"
                                value="san francisco"
                                onChange={handleChange}
                            />
                            <span className="toggle"></span>
                            San Francisco
                        </label>
                        <label htmlFor="denver">
                            <input
                                type="checkbox"
                                id="denver"
                                name="city"
                                value="denver"
                                onChange={handleChange}
                            />
                            <span className="toggle"></span>
                            Denver
                        </label>
                    </div>
                </div>
                <div className='switch_btn'>
                    <label htmlFor="category">Category</label>
                    <div className="toggle-container">
                        <label htmlFor="one">
                            <input
                                type="checkbox"
                                id="one"
                                name="category"
                                value="one"
                                onChange={handleChange}
                            />
                            <span className="toggle"></span>
                            One
                        </label>
                        <label htmlFor="two">
                            <input
                                type="checkbox"
                                id="two"
                                name="category"
                                value="two"
                                onChange={handleChange}
                            />
                            <span className="toggle"></span>
                            two
                        </label>
                    </div>
                </div>
                <div className='switch_btn'>
                    <label htmlFor="type">Type</label>
                    <div className="toggle-container">
                        <label htmlFor="A">
                            <input
                                type="checkbox"
                                id="A"
                                name="type"
                                value="A"
                                onChange={handleChange}
                            />
                            <span className="toggle"></span>
                            A
                        </label>
                        <label htmlFor="B">
                            <input
                                type="checkbox"
                                id="B"
                                name="type"
                                value="B"
                                onChange={handleChange}
                            />
                            <span className="toggle"></span>
                            B
                        </label>
                        <label htmlFor="C">
                            <input
                                type="checkbox"
                                id="C"
                                name="type"
                                value="C"
                                onChange={handleChange}
                            />
                            <span className="toggle"></span>
                            C
                        </label>
                    </div>
                </div>
                <div className='switch_btn'>
                    <label htmlFor="active">Active</label>
                    <div className="toggle-container">
                        <label htmlFor="true">
                            <input
                                type="checkbox"
                                id="true"
                                name="active"
                                value="true"
                                onChange={handleChange}
                            />
                            <span className="toggle"></span>
                            true
                        </label>
                        <label htmlFor="false">
                            <input
                                type="checkbox"
                                id="false"
                                name="active"
                                value="false"
                                onChange={handleChange}
                            />
                            <span className="toggle"></span>
                            false
                        </label>
                    </div>
                </div>
                <div className='search'>
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Name"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        name="name"
                        value={filter.name}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='main-table'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.category}</td>
                                <td>{item.type}</td>
                                <td>{item.active.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Filter;
