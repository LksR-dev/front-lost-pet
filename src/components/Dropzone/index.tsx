import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { usePetData } from 'hooks';
import css from './index.css';

export function MyDropzone(props) {
	const [img, setImg] = useState(null);
	const [petData, setPetData] = usePetData();

	const onDrop = useCallback(
		(acceptedFiles) => {
			acceptedFiles.forEach((file) => {
				// Do whatever you want with the file   contents
				const reader = new FileReader();
				reader.onload = (e) => {
					const result = e.target.result;
					setImg(result);
					setPetData({ ...petData, img: result });
				};
				reader.readAsDataURL(file);
			});
		},
		[img],
	);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div className={css.img__container} {...getRootProps()}>
			<input {...getInputProps()} />
			<img className={css.img} src={img ? img : props.img} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p className={css.upload__img}>Agregar/modificar foto</p>
			)}
		</div>
	);
}
