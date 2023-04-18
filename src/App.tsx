import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.tsx";
import Navbar from "./Components/NavBar/NavBar.tsx";
import Profile from "./Components/Profile/Profile.tsx";
import Dialogs from "./Components/Dialogs/Dialogs.tsx";
import News from "./Components/News/News.tsx";
import Music from "./Components/Music/Music.tsx";
import Settings from "./Components/Settings/Settings.tsx";

function App(props: any) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/Profile/*' element={<Profile posts={props.state.posts}/>}/>
                    <Route path='/Dialogs/*' element={<Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/>}/>
                    <Route path='/News/*' element={<News />}/>
                    <Route path='/Music/*' element={<Music />}/>
                    <Route path='/Settings/*' element={<Settings />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App



