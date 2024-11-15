import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { User } from "../Profile/UserProfile"



let meal_count = User.expense_details.current_month.meal_counts;

const SumArray = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = Object.keys(meal_count);

let meals = [0];
let total_meals = [0];
for (let i = 0; i < meal_count.length; i++) {
  meals[i + 1] = SumArray(meal_count[i]);
  total_meals[i + 1] = SumArray(meals);
}

export const data = {
  labels,
  datasets: [
    {
      label: "Total Meals",
      data: total_meals,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
      yAxisID: "y-axis",
    },
    {
      label: "Meals Per Day",
      backgroundColor: "rgb(75,192,192)",
      borderColor: "rgb(75,192,192)",
      data: meals,
      yAxisID: "y-axis",
    },
  ],
};

const option = {
  responsive: true,
  tension: 0.3,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 18, // Change font size
          style: "bold", // Change font style
          color: "#00ff00", // Change font color
        },
      },
    },
    title: {
      display: true,
      text: "", //Custom Chart Title
      font: {
        size: 18, // Change font size
        style: "bold", // Change font style
        color: "#ff00ff", // Change font color
      },
    },
  },
  scales: {
    yAxes: [
      {
        ticks: { beginAtZero: true },
        scaleLabel: { display: true, labelString: "Primary Y Axis" },
      },
    ],
    xAxes: [{ scaleLabel: { display: true, labelString: "Primary X Axis" } }],
  },
};

export default function Chart() {
  return <Line className="overflow-hidden" options={option} data={data} />;
}
