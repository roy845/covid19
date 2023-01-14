import Plot from "react-plotly.js";

const Chart = ({index,data,title})=>{



return(
<Plot
        key={index}
        className="ml-5"
        data={data[index]}
        layout={{
          width: 500,
          height: 500,
          yaxis: {
            gridcolor:"#e8e9e9",
          },

          paper_bgcolor:"rgba(248,249,250,255)",
          plot_bgcolor:"rgba(248,249,250,255)",
          title: title,
          font: {
            size: 20,
            color:"rgba(0,0,0,1)"
          },
        }}
      />
)

}

export default Chart;