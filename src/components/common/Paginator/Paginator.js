import React, { Component } from 'react'
import './Paginator.scss'





class Paginator extends Component {
    render() {
        const portionSize = 10;
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let sectionCount = Math.ceil(pageCount / portionSize)
        let portionLeft = (this.props.portionNumber - 1) * portionSize + 1;
        let portionRight = portionLeft + portionSize;
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div className="paginator" >
                <button className="paginator__prev"
                    onClick={this.props.onPortionPrev}
                    disabled={this.props.portionNumber <= 1 ? true : false}
                >prev</button>
                <div className="paginator__pages">
                    {pages
                        .filter((item) => item >= portionLeft && item < portionRight)
                        .map(item => {
                            return (<span onClick={() => this.props.onPageChanged(item)}
                                className={this.props.currentPage === item ? "paginator__pages_count" : "paginator__pages_items"}>{item}</span>)
                        })}
                </div>
                <button className="paginator__next"
                    onClick={this.props.onPortionNext}
                    disabled={this.props.portionNumber >= sectionCount ? true : false}
                >next</button>
            </div>
        )
    }
}

export default Paginator
