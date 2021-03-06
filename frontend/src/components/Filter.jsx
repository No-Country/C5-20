import stylesFilter from "./filter.module.css";
import React from "react";
export default function Filter({ handlerSubmit, handlerChange, setPage }) {
  const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const rooms = [1, 2, 3, 4, 5];

  const toilets = [1, 2, 3];

  return (
    <section className="w100">
      <div className={`mt-2 ${stylesFilter.bgcFilters}`}>
        <form
          action=""
          id="formFilter"
          className={`${stylesFilter.w_80} m-auto justify-content-around ${stylesFilter.d_flex} ${stylesFilter.d_block}`}
          onSubmit={handlerSubmit}
        >
          <div class={`input-group mb-3 ${stylesFilter.w_12}`}>
            <div class={`${stylesFilter.m_auto}`}>
              <label htmlFor="rooms"
              style={{fontWeight:'bold'}}
              className="m-auto text-dark">
                Habitaciones
              </label>
              <select
              style={{fontWeight:'bold'}}
                class="form-select m-auto"
                id="rooms"
                name="rooms"
                onChange={handlerChange}
              >
                <option selected>Habitaciones</option>
                {rooms.map((room) => (
                  <option value={room}>{room}</option>
                ))}
              </select>
            </div>
          </div>
          <div 
          style={{fontWeight:'bold'}}
          class={`input-group mb-3 ${stylesFilter.w_12}`}>
            <div class={`${stylesFilter.m_auto}`}>
              <label htmlFor="toilets" 
            
              className="m-auto text-dark">
                Baños
              </label>
              <select
                style={{fontWeight:'bold'}}
                class="form-select m-auto"
                id="toilets"
                name="toilets"
                onChange={handlerChange}
              >
                <option selected>Baños</option>
                {toilets.map((toilet) => (
                  <option value={toilet}>{toilet}</option>
                ))}
              </select>
            </div>
          </div>
          <div 
            style={{fontWeight:'bold'}}
          class={`input-group mb-3 ${stylesFilter.w_12}`}>
            <div class={`${stylesFilter.m_auto}`}>
              <label htmlFor="floor" className="m-auto text-dark">
                Piso
              </label>
              <select
                style={{fontWeight:'bold'}}
                class="form-select m-auto"
                id="floor"
                name="floor"
                onChange={handlerChange}
              >
                <option selected>Piso</option>
                {floors.map((floor) => (
                  <option value={floor}>{floor}</option>
                ))}
              </select>
            </div>
          </div>
          <div
            class={`input-group mb-3  ${stylesFilter.containerInputPrice} ${stylesFilter.w_25}`}
          >
            <label htmlFor="Size" 
              style={{fontWeight:'bold'}}
              className="m-auto text-dark">
              Precio
            </label>
            <div 
             
            className="d-flex justify-content-around">
              <input
               style={{fontWeight:'bold'}}
                type="number"
                class="form-control "
                id="initialPrice"
                aria-label="Amount (to the nearest dollar)"
                placeholder="Desde"
                name="initialPrice"
                onChange={handlerChange}
              />

              <input
               style={{fontWeight:'bold'}}
                type="number"
                class="form-control mx-1"
                id="endPrice"
                aria-label="Amount (to the nearest dollar)"
                placeholder="Hasta"
                name="endPrice"
                onChange={handlerChange}
              />
            </div>
          </div>

          <div
            class={`input-group mb-3  ${stylesFilter.containerInputPrice} ${stylesFilter.w_25}`}
          >
            <label htmlFor="iniciaSize"
             style={{fontWeight:'bold'}} className="m-auto text-dark">
              m <sup>2</sup>
            </label>
            <div className="d-flex justify-content-around">
              <input
               style={{fontWeight:'bold'}}
                type="number"
                class="form-control "
                id="initialSize"
                placeholder="Desde m ²"
                name="initialSize"
                onChange={handlerChange}
              />

              <input
               style={{fontWeight:'bold'}}
                type="number"
                class="form-control mx-1"
                id="endPrice"
                aria-label="Amount (to the nearest dollar)"
                placeholder="Hasta m ²"
                name="endSize"
                onChange={handlerChange}
              />
            </div>
          </div>

          <div class="mt-4 p-2">
            <button
              class="btn btn-dark p-2 text-light "
              type="submit"
              id="btnSubmitFilter"
              onClick={() => setPage(1)}
            >
              Filtrar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
