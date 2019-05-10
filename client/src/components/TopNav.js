import React from "react";

function TopNav(props) {
    return (
        < div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Clicky Game</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <p class="nav-link">Click Each Image Only Once!</p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" >Score Section</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
}

export default TopNav;