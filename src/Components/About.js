import React from 'react'

export default function About() {
  return (
    <div
      style={{
        margin:"10px auto",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap:"20px"
      }}>
      <span style={{ margin: "10px", width: "100%" }}>
        <span style={{ margin: "2px", fontSize: "25px", fontWeight: "bold" }}>
          ‘X-Store’
        </span>{" "}
        comprehends the spirit of buyers in US. As one of US’s retail pioneers
        with numerous retail designs, we interface a differing and enthusiastic
        network of purchasers in US, vendors and organizations. The aggregate
        effect on business is stunning:
      </span>
      <p style={{ margin: "20px", width: "100%" }}>
        Almost 500 million clients stroll into our stores every year and pick
        items and administrations provided by more than 30,000 little, medium
        and substantial business people and producers from crosswise over US.
        What’s more, this number is set to develop.
      </p>
    </div>
  );
}
