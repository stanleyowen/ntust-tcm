/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";

// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import { useMediaQuery } from "@mui/material";
import MKTypography from "components/MKTypography";
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function LifeNourishingChart() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const chartSize = isSmallScreen ? 300 : isMediumScreen ? 400 : 600;
  const chartInnerRadius = chartSize / 3;
  const chartOuterRadius = chartSize / 2.5;

  const periods = [
    { label: "Zi (11 PM - 1 AM)", description: "Gallbladder energy is strongest.", value: 1 },
    { label: "Chou (1 AM - 3 AM)", description: "Liver detoxifies the body.", value: 1 },
    { label: "Yin (3 AM - 5 AM)", description: "Lung energy is strongest.", value: 1 },
    { label: "Mao (5 AM - 7 AM)", description: "Large intestine is active.", value: 1 },
    { label: "Chen (7 AM - 9 AM)", description: "Stomach energy is strongest.", value: 1 },
    { label: "Si (9 AM - 11 AM)", description: "Spleen processes nutrients.", value: 1 },
    { label: "Wu (11 AM - 1 PM)", description: "Heart energy is strongest.", value: 1 },
    { label: "Wei (1 PM - 3 PM)", description: "Small intestine absorbs nutrients.", value: 1 },
    { label: "Shen (3 PM - 5 PM)", description: "Bladder energy is strongest.", value: 1 },
    { label: "You (5 PM - 7 PM)", description: "Kidney energy is strongest.", value: 1 },
    { label: "Xu (7 PM - 9 PM)", description: "Pericardium protects the heart.", value: 1 },
    { label: "Hai (9 PM - 11 PM)", description: "Triple burner regulates energy.", value: 1 },
  ];

  const COLORS = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ];

  return (
    <BaseLayout
      breadcrumb={[{ label: "Classics" }, { label: "Life Nourishing in 12 Two-Hour Periods" }]}
    >
      <MKBox component="section" textAlign="center" py={6}>
        <MKTypography variant="h3" mb={3}>
          Life Nourishing in 12 Two-Hour Periods
        </MKTypography>

        <MKBox display="flex" justifyContent="center" alignItems="center" mb={3}>
          <PieChart width={chartSize} height={chartSize}>
            <Pie
              data={periods}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={chartOuterRadius}
              innerRadius={chartInnerRadius}
              startAngle={105} // Start at the top (12 o'clock position)
              endAngle={-255} // Complete the circle in a clockwise direction
              onMouseEnter={(data, index) => setHoveredSection(periods[index])}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {periods.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const { label, description } = payload[0].payload;
                  return (
                    <MKBox
                      sx={{
                        background: "white",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "8px",
                      }}
                    >
                      <MKTypography variant="h6">{label}</MKTypography>
                      <MKTypography variant="body2">{description}</MKTypography>
                    </MKBox>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </MKBox>

        {hoveredSection && (
          <MKBox mt={3}>
            <MKTypography variant="h5" color="primary">
              {hoveredSection.label}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              {hoveredSection.description}
            </MKTypography>
          </MKBox>
        )}
      </MKBox>
    </BaseLayout>
  );
}

export default LifeNourishingChart;
