// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import { useMediaQuery } from "@mui/material";
import MKTypography from "components/MKTypography";
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function LifeNourishingChart() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const chartSize = isSmallScreen ? 300 : isMediumScreen ? 400 : 600;
  const chartInnerRadius = chartSize / 3;
  const chartOuterRadius = chartSize / 2.5;

  const periods = [
    {
      label: "Foot shaoyang (11 PM - 1 AM)",
      description: "Gallbladder energy is strongest.",
      value: 1,
    },
    { label: "Foot jueyin (1 AM - 3 AM)", description: "Liver detoxifies the body.", value: 1 },
    { label: "Hand taiyin (3 AM - 5 AM)", description: "Lung energy is strongest.", value: 1 },
    { label: "Hand yangming (5 AM - 7 AM)", description: "Large intestine is active.", value: 1 },
    { label: "Foot yangming (7 AM - 9 AM)", description: "Stomach energy is strongest.", value: 1 },
    { label: "Foot taiyin (9 AM - 11 AM)", description: "Spleen processes nutrients.", value: 1 },
    { label: "Hand shaoyin (11 AM - 1 PM)", description: "Heart energy is strongest.", value: 1 },
    {
      label: "Hand taiyang (1 PM - 3 PM)",
      description: "Small intestine absorbs nutrients.",
      value: 1,
    },
    { label: "Foot taiyang (3 PM - 5 PM)", description: "Bladder energy is strongest.", value: 1 },
    { label: "Foot shaoyin (5 PM - 7 PM)", description: "Kidney energy is strongest.", value: 1 },
    {
      label: "Hand jueyin (7 PM - 9 PM)",
      description: "Pericardium protects the heart.",
      value: 1,
    },
    {
      label: "Hand shaoyang (9 PM - 11 PM)",
      description: "Triple burner regulates energy.",
      value: 1,
    },
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

        <MKTypography variant="subtitle1" color="primary" mb={2}>
          Please hover over the chart to see details for each period.
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
          <MKBox mt={3} mb={3}>
            <MKTypography variant="h5" color="primary">
              {hoveredSection.label}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              {hoveredSection.description}
            </MKTypography>
          </MKBox>
        )}

        <MKTypography variant="body1" color="text" mb={4} sx={{ textAlign: "justify" }}>
          In Traditional Chinese Medicine (TCM), our daily energy flow follows a cycle of twelve
          two-hour periods, each corresponding to a specific organ system. This concept is closely
          linked with the body’s meridians, guiding when each organ is most active and thus when
          certain activities are best carried out. For example, from 3:00 to 5:00 AM, the lung
          meridian is at its peak. This explains why elderly individuals with weak lung function may
          cough heavily during this time, as the body is more sensitive to cold and in need of
          oxygen. From 5:00 to 7:00 AM, the large intestine becomes active, making this the ideal
          time for bowel movements to eliminate solid waste. Since both the lungs and large
          intestine are responsible for expelling waste—one for gas and one for solids—TCM
          recommends clearing the body before nourishing it.
        </MKTypography>
        <MKTypography variant="body1" color="text" mb={4} sx={{ textAlign: "justify" }}>
          From 7:00 to 9:00 AM, the stomach meridian becomes dominant. This is the best time to have
          a hearty breakfast to nourish the digestive system. Following that, from 9:00 to 11:00 AM,
          the spleen meridian is most active. Since the spleen governs muscles, this period is ideal
          for physical activity or exercise. Between 11:00 AM and 1:00 PM, the heart meridian takes
          over, making it the best time for tasks requiring focus, as mental performance tends to
          peak. After that, from 1:00 to 3:00 PM, the small intestine processes the nutrients
          absorbed from the morning meals.
        </MKTypography>
        <MKTypography variant="body1" color="text" mb={4} sx={{ textAlign: "justify" }}>
          In the afternoon, from 3:00 to 5:00 PM, the bladder and kidneys start working to filter
          and eliminate waste through urine. From 5:00 to 7:00 PM, the pericardium and the triple
          burner (upper, middle, and lower jiao) are active, supporting overall body circulation and
          detoxification. This is a good time to relax or take a bath to release accumulated
          tension. From 7:00 to 9:00 PM, the gallbladder meridian is strongest; this is a suitable
          time to wind down with calming activities such as meditation. Between 9:00 and 11:00 PM,
          the liver becomes dominant. As the liver is known as the body’s general, it is crucial to
          be in deep sleep during this time to allow for optimal detoxification and hormonal
          balance. Finally, the cycle returns to the lung meridian in the early morning hours.
        </MKTypography>
        <MKBox
          component="section"
          variant="gradient"
          bgColor="dark"
          position="relative"
          py={6}
          px={{ xs: 2, lg: 0 }}
          mx={-2}
        >
          <Container>
            <Grid container>
              <MKTypography variant="h3" color="white">
                Fun Fact: The 12 Two-Hour Cycle
              </MKTypography>

              <Grid item xs={12} display="flex" justifyContent="center">
                <MKBox
                  component="img"
                  src="https://img.freepik.com/premium-vector/internal-biological-clock-healthy-lifestyle-woman-routine-girl-night-daytime-flat-vector-illustration-circadian-rhythms-timezone-concept-banner-website-design-landing-web-page_179970-7529.jpg"
                  alt="Traditional Chinese Medicine"
                  borderRadius="lg"
                  mb={3}
                  mt={3}
                  sx={{ objectFit: "cover" }}
                />
              </Grid>

              <MKTypography variant="body2" color="white" opacity={0.8} mt={3} textAlign="justify">
                Although this meridian clock offers a general guideline, each person has their own
                unique body clock. Due to work, class schedules, or night shifts, it may not always
                be feasible to follow this cycle strictly. The important point is consistency. Try
                to maintain a stable routine throughout the week, as constantly changing your sleep
                and activity times can disrupt your body’s internal balance. For example, sleeping
                and waking at drastically different times on weekends compared to weekdays can
                interfere with overall health. In general, aligning your activities—such as eating,
                sleeping, and exercising—with your body's rhythm can promote better health and
                vitality.
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
    </BaseLayout>
  );
}

export default LifeNourishingChart;
