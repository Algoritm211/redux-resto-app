export default class RestoService {
  url = 'http://localhost:3000/menu'


  getMenuItems = async () => {
    const result = await fetch(this.url)
    if (!result.ok) {
      throw new Error(`Can not fetch data from ${this.url}, status: ${result.status}`)
    }
    const data = await result.json()
    return data
  }
}