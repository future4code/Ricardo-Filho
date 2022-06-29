export const convertDate = ( date: any ): any => {
    const taskDate: Date = new Date(date);
    const  day = String(taskDate.getDate()).padStart(2, '0');
    const month = String(taskDate.getMonth() + 1).padStart(2, '0');
    const year = taskDate.getFullYear();
    const currentDate = day + "/" + month + "/" + year;
    return currentDate;
};

