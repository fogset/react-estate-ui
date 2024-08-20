import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
function listPage() {
    const data = listData;

    return (
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {listData.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={listData} />
            </div>
        </div>
    );
}

export default listPage;
