import React, { Component } from "react";
import { Link } from "react-router-dom";


class MiniNav extends Component {
    render() {
        return (

            <div>

                <div class="portfolioMenu">
                    <div class="portfolioMenu">
                        <ul class="portfolioNav">
                            <Link to='/Development' class="nameItem">
                                <a class="navLink" href="Development">Development</a>
                            </Link>
                            <Link to="/Design" class="nameItem">
                                <a class="navLink" href="Design">Design</a>
                            </Link>
                            <Link to='/Portfolio' class="nameItem">
                                <a class="navLink" href="Portfolio">Collections</a>
                            </Link>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MiniNav;
