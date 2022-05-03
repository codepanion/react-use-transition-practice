const numberOfCellsInRow = 200;
const cellSizePx = 2;
const totalNumOfCells = numberOfCellsInRow * numberOfCellsInRow;
const gridSizePx = numberOfCellsInRow * cellSizePx;

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const Preview = ({ x, y, isPending }) => {
  return (
    <div
      style={{
        width: `${gridSizePx}px`,
        height: `${gridSizePx}px`,
        position: "relative",
        border: "1px solid #000",
        display: "grid",
        gridTemplateColumns: `repeat(${numberOfCellsInRow}, ${cellSizePx}px)`,
      }}
    >
      {!isPending ? (
        <>
          {[...Array(totalNumOfCells)].map((_, index) => (
            <span
              key={index}
              style={{
                backgroundColor: generateRandomColor(),
              }}
            ></span>
          ))}
          <span
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              backgroundColor: "red",
              top: (y / window.innerHeight) * gridSizePx,
              left: (x / window.innerWidth) * gridSizePx,
            }}
          ></span>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Preview;
