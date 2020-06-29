import React, { Component } from "react";
import { ReactComponent as DownArrow } from "../../assets/svgs/chevron.svg";
import { ReactComponent as SearchIcon } from "../../assets/svgs/search.svg";
import styles from "./searchBar.module.css";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.state = {
      searchType: "Walks",
      dropDownOpen: false,
      inputValue: "",
    };
  }

  dropDownClick = () => {
    const dropDownOpen = this.state.dropDownOpen;

    this.setState({ dropDownOpen: !dropDownOpen });
  };

  searchTypeClicked(searchParam) {
    const searchType = this.state.searchType;
    const newSearchType = searchType === "Walks" ? "Businesses" : "Walks";
    if (searchParam === newSearchType) {
      this.setState({ searchType: newSearchType, dropDownOpen: false });
    }
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value,
    });
  }

  render() {
    const dropDownStyle = this.state.dropDownOpen ? { display: "block" } : { display: "none" };
    const walksBtnStyle = this.state.searchType === "Walks" ? { color: "gray", cursor: "default" } : { color: "#282cdd" };
    const businessesBtnStyle = this.state.searchType === "Businesses" ? { color: "gray", cursor: "default" } : { color: "#282cdd" };
    return (
      <form action={"/walks/search?"} method="GET">
        <div className={styles.container}>
          <div className={styles.selectionContainer} onClick={() => this.dropDownClick()}>
            <span className={styles.selectionText}>{this.state.searchType}</span>
            <DownArrow fill="#282cdd" className={styles.downArrow} />
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.inputContainer}>
            <input value={this.state.inputValue} onChange={(evt) => this.updateInputValue(evt)} className={styles.input} type="text" name="location" placeholder="Enter a Location" />
          </div>
          <button className={styles.searchBtnContainer}>
            <SearchIcon fill="#282cdd" className={styles.searchBtn} />
          </button>
        </div>
        <div style={dropDownStyle} className={styles.dropDownBox}>
          <p style={walksBtnStyle} className={styles.dropDownText} onClick={() => this.searchTypeClicked("Walks")}>
            Walks
          </p>
          <p style={businessesBtnStyle} className={styles.dropDownText} onClick={() => this.searchTypeClicked("Businesses")}>
            Businesses
          </p>
        </div>
      </form>
    );
  }
}
