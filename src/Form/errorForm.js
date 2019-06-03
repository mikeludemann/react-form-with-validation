import React from 'react';

export const errorForm = ({errorForms}) =>
	<div className='error--form--status'>
		{Object.keys(errorForms).map((fieldName, i) => {
			if(errorForms[fieldName].length > 0){
				return (
					<div key={i}>{fieldName} {errorForms[fieldName]}</div>
				) 
			} else {
				return '';
			}
		})}
	</div>
