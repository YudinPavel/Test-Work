import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	transform(events, value){
		if(value == null || value.trim()=="")
			return events;
		return events.filter(event => {
			return event.event.includes(value)
		})
	}	
}