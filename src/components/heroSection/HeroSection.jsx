import { useContext } from "react";
import myContext from "../../context/data/myContext";

function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <section
      style={{ background: mode === "dark" ? "#2c2c2c" : "#fff9e6", // Dark mode: đen nhạt, Light mode: vàng nhạt
        color: mode === "dark" ? "white" : "black", }} // Màu vàng nhạt cho cả chế độ sáng và tối
    >
      {/* Hero Section */}
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* Main Content */}
        <main>
          <div className="text-center">
            <div className="mb-2">
              {/* Image */}
              <div className="flex justify-center">
                <img src="\Images\logo.png" alt="Logo" />
              </div>

              {/* Text */}
              <h1 className="text-3xl text-gray-800 font-bold" style={{ color: mode === "dark" ? "white" : "black" }}>Stelary</h1>
            </div>

            {/* Paragraph */}
            <p
              style={{ color: mode === "dark" ? "white" : "black" }} // Text chuyển thành đen để nổi bật trên nền vàng nhạt
              className="sm:text-3xl text-xl font-extralight sm:mx-auto"
            >
              Here are some blogs contributed by Nhom 11, showcasing our team’s journey, experiences, and insights.
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HeroSection;
