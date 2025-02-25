import React, { useRef, useState } from 'react';
import { useBillboard } from 'src/core/hooks/useBillboard';
import { Input } from 'src/core/shared/components/input/Input';
import { Select } from 'src/core/shared/components/select/Select';
import { IColumn, Table } from 'src/core/shared/components/table/Table';
import { Title } from 'src/core/shared/components/title/Tile';
import { CollectionListBdbMlModal } from 'src/core/shared/utils/sherpa-tagged-components';

const Billboard = () => {
  const refmodal = useRef();
  const { rows, openCreateRoom, postDataRoom, rooms, movies } = useBillboard(refmodal);
  const columnsBDB: IColumn[] = [
    { colName: '', control: 'id' },
    { colName: 'Pelicula', control: 'text' },
    { colName: 'Sala', control: 'text' },
    { colName: 'Hora inicio', control: 'text' },
    { colName: 'Hora fin', control: 'text' },
    { colName: '', control: 'text' },
    { colName: '', control: 'text' },
    { colName: '', control: 'text' }
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
          <Title title="Crear cartelera" subtitle="Aquí podrás crear cartelera." />
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
              <Select
                name="nam"
                label="Seleccione la pelicula"
                message="Ingrese un nombre"
                options={movies}
                onChange={handleChange}
              />
              <Select
                name="room"
                label="Seleccione la sala"
                message="Ingrese un nombre"
                options={rooms}
                onChange={handleChange}
              />
              <Input
                name="nameRoom"
                label="Seleccione hora de inicio"
                required="true"
                message="Ingrese un nombre"
                value={formData.nameRoom}
                onChange={handleChange}
              />
              <Input
                name="capacityRoom"
                label="Seleccione hora final"
                required="true"
                message="Ingrese un valor"
                value={formData.capacityRoom}
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

export default Billboard;
