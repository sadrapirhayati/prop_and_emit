export interface Shape {
    title: string,
    content: string,
}

export const Shapes: Array<Shape> = [
    {
        title: 'rectangle',
        content: '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="0" y="0" rx="2" ry="2" fill="blue" /></svg>'
    },
    {
        title: 'circle',
        content: '<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"><circle r="10" cx="10" cy="10" fill="red" /></svg>'    
    }   
]