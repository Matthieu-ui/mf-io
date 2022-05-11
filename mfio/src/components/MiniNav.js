import React, { Component } from "react";


class MiniNav extends Component {
    render() {
        return (

            <div>

                <div class="portfolioMenu">
                    <div class="portfolioMenu">
                        <ul class="portfolioNav">
                            <li class="nameItem">
                                <a class="navLink" href="Development">Development</a>
                            </li>
                            <li class="nameItem">
                                <a class="navLink" href="Design">Design</a>
                            </li>
                            <li class="nameItem">
                                <a class="navLink" href="Portfolio">Collections</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MiniNav;
