import React, { useRef, useState } from 'react';
import { useReservation } from 'src/core/hooks/useReservation';
import { Input } from 'src/core/shared/components/input/Input';
import { Select } from 'src/core/shared/components/select/Select';
import { IColumn, Table } from 'src/core/shared/components/table/Table';
import { Title } from 'src/core/shared/components/title/Tile';
import { CollectionListBdbMlModal } from 'src/core/shared/utils/sherpa-tagged-components';

const Reservation = () => {
  const refmodal = useRef();
  const { rows, openCreateRoom, postDataRoom, shedule } = useReservation(refmodal);
  const columnsBDB: IColumn[] = [
    { colName: '', control: 'id' },
    { colName: 'Nombre', control: 'text' },
    { colName: 'Correo', control: 'text' },
    { colName: 'Sillas', control: 'text' },
    { colName: 'Nombre de la pelicula', control: 'text' },
    { colName: 'Sala', control: 'text' },
    { colName: 'Hora de ingreso', control: 'text' },
    { colName: 'Hora de salida', control: 'text' }
  ];
  const [formData, setFormData] = useState({
    nameRoom: '',
    capacityRoom: ''
  });

  const handleChange = (e: any) => {
    console.log(e.detail);
    let nameX;
    let valueX;
    if (e.detail) {
      nameX = e.detail.name;
      valueX = e.detail.value;
    } else {
      const { name, value } = e.target;
      nameX = name;
      valueX = value;
    }
    setFormData(previusValue => ({
      ...previusValue,
      [nameX]: valueX
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postDataRoom(formData);
  };
  return (
    <>
      <div data-testid="home" className="container-page">
        <div className="container-title" style={{ marginTop: '64px' }}>
          <Title title="Modulo de reservas" subtitle="Aquí podrás reservar una función." />
        </div>
        <div className="container-button" style={{ width: '200px', marginTop: '24px', marginLeft: '77%' }}>
          <button className="bdb-at-btn bdb-at-btn--primary bdb-at-btn--sm" onClick={openCreateRoom}>
            Crear
          </button>
        </div>

        <div className="container-Table" style={{ marginTop: '24px' }}>
          <Table columns={columnsBDB} data={rows} />
        </div>
        <CollectionListBdbMlModal
          ref={refmodal}
          icon="information"
          title-modal="Crear Sala"
          options-buttons='[{"id":"0","value":"Volver"}]'
          is-close="false"
        >
          <div slot="content">
            <form onSubmit={handleSubmit}>
              <Input
                name="client"
                label="Nombre del cliente"
                required="true"
                message="Ingrese un nombre"
                value={formData.nameRoom}
                onChange={handleChange}
              />
              <Input
                name="email"
                label="Ingrese correo electrónico"
                required="true"
                message="Ingrese un valor"
                value={formData.capacityRoom}
                onChange={handleChange}
              />
              <Input
                name="site"
                label="Ingrese silla"
                required="true"
                message="Ingrese un valor"
                value={formData.capacityRoom}
                onChange={handleChange}
              />
              <Select
                name="nam"
                label="Seleccione la pelicula"
                message="Ingrese un nombre"
                options={shedule}
                onChange={handleChange}
              />
              <div className="container-button" style={{ width: '200px', marginTop: '24px' }}>
                <button type="submit" className="bdb-at-btn bdb-at-btn--primary bdb-at-btn--sm">
                  Crear
                </button>
              </div>
            </form>
          </div>
        </CollectionListBdbMlModal>
      </div>
    </>
  );
};

export default Reservation;
