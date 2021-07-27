import React from "react";
import AirQualityCard from "./report/AirQualityCard";
import CouncilTaxCard from "./report/CouncilTaxCard";

import CrimesCard from "./report/CrimesCard";
import DemographicsCard from "./report/DemographicsCard";
import PriceCard from "./report/PriceCard";
import RestaurantsCard from "./report/RestaurantsCard";
import SchoolsCard from "./report/SchoolsCard";
import SoldPriceCard from "./report/SoldPriceCard";

const Report = ({ report }) => {
	return (
		<>
			<PriceCard pricesPerSqf={report.pricesPerSqf} />
			<SoldPriceCard soldPricesPerSqf={report.soldPricesPerSqf} />
			<DemographicsCard demographics={report.demographics} />
			<CrimesCard crimeData={report.crimeData} />
			<AirQualityCard airQuality={report.airQuality} />
			<SchoolsCard schools={report.schools} />
			<CouncilTaxCard councilTax={report.councilTax} />
			<RestaurantsCard restaurants={report.restaurants} />
		</>
	);
};

export default Report;
