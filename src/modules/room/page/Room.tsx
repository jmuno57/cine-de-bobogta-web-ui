import React, { useRef, useState } from 'react';
import { useRooms } from 'src/core/hooks/UseRooms';
import { Input } from 'src/core/shared/components/input/Input';
import { IColumn, Table } from 'src/core/shared/components/table/Table';
import { Title } from 'src/core/shared/components/title/Tile';
import { CollectionListBdbMlModal } from 'src/core/shared/utils/sherpa-tagged-components';

const Room = () => {
  const refmodal = useRef();
  const { rows, openCreateRoom, postDataRoom } = useRooms(refmodal);
  const [formData, setFormData] = useState({
    nameRoom: '',
    capacityRoom: ''
  });
  const columnsBDB: IColumn[] = [
    { colName: '', control: 'id' },
    { colName: 'Nombre de sala', control: 'text' },
    { colName: 'Cantidad de sillas', control: 'text' },
    { colName: '', control: 'text' }
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(previusValue => ({
      ...previusValue,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    postDataRoom(formData);
  };
  return (
    <>
      <div data-testid="home" className="container-page">
        <div className="container-title" style={{ marginTop: '64px' }}>
          <Title title="Crear sala" subtitle="Aquí podrás crear una sala del cine." />
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
                name="nameRoom"
                label="Nombre de la sala"
                required="true"
                message="Ingrese un nombre"
                value={formData.nameRoom}
                onChange={handleChange}
              />
              <Input
                name="capacityRoom"
                label="Capacidad de la sala"
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

export default Room;
