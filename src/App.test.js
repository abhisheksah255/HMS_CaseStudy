import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDom from 'react-dom';
import Profile from './component/Homepage/Profile';
import Navigation from './component/Homepage/Navigation';



test('test',()=>{
    expect(true).toBe(true)
})
// it("checkButtonRender",()=>{
//     const {queryByTitle}=render(<Navigation/>)
//     const btn= queryByTitle("Profile")
//     expect(btn).toBeTruthy()
// })


// jest.mock('react-router',()=>({
//     withRouter: jest.fn(Comp=>props=><Comp{...props}/>)
// }))