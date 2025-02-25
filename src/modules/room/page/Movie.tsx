import React, { useRef, useState } from 'react';
import { useMovies } from 'src/core/hooks/UseMovies';
import { Input } from 'src/core/shared/components/input/Input';
import { IColumn, Table } from 'src/core/shared/components/table/Table';
import { Title } from 'src/core/shared/components/title/Tile';
import { CollectionListBdbMlModal } from 'src/core/shared/utils/sherpa-tagged-components';

const Movie = () => {
  const refmodal = useRef();
  const { rows, openCreateMovie, postDataRoom } = useMovies(refmodal);
  const columnsBDB: IColumn[] = [
    { colName: '', control: 'id' },
    { colName: 'Pelicula', control: 'text' },
    { colName: 'Genero', control: 'text' },
    { colName: 'Descripción', control: 'text' },
    { colName: 'duración', control: 'text' },
    { colName: '', control: 'text' },
    { colName: '', control: 'text' },
    { colName: '', control: 'text' }
  ];
  const [formData, setFormData] = useState({
    nameRoom: '',
    capacityRoom: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(previusValue => ({
      ...previusValue,
      [name]: value
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
          <Title title="Crear una pelicula" subtitle="Aquí podrás crear una pelicula." />
        </div>
        <div className="container-button" style={{ width: '200px', marginTop: '24px', marginLeft: '77%' }}>
          <button className="bdb-at-btn bdb-at-btn--primary bdb-at-btn--sm" onClick={openCreateMovie}>
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
                name="nameMovie"
                label="Nombre de la pelicula"
                required="true"
                message="Ingrese un nombre"
                value={formData.nameRoom}
                onChange={handleChange}
              />
              <Input
                name="descriptionMovie"
                label="Descripción"
                required="true"
                message="Ingrese un valor"
                value={formData.capacityRoom}
                onChange={handleChange}
              />
              <Input
                name="durationMovie"
                label="Duración"
                required="true"
                message="Ingrese un nombre"
                value={formData.nameRoom}
                onChange={handleChange}
              />
              <Input
                name="genreMovie"
                label="Genero"
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

export default Movie;
