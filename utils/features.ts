class features {
      query: any;
      queryStr: any;
      constructor(query: any, queryStr: any) {
            this.query = query;
            this.queryStr = queryStr
      }
      
      pagination(resultPerPage: number) {
            const currentPage = Number(this.queryStr.page) || 1;
            const skip = resultPerPage * (currentPage - 1);
            this.query = this.query.limit(resultPerPage).skip(skip);
            console.log(this)
            return this;
      }
}
export default features

