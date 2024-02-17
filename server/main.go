package main

import (
	"net/http"

	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
)

type joke struct {
	ID      string `json:"id"`
	Value   string `json:"value"`
	IconUrl string `json:"icon_url"`
}

var jokes = []joke{
	{ID: "1", Value: "Blue Train", IconUrl: "http://google.com"},
	{ID: "2", Value: "Jeru", IconUrl: "http://google.com"},
	{ID: "3", Value: "Sarah Vaughan and Clifford Brown", IconUrl: "http://google.com"},
}

// getJokes responds with the list of all albums as JSON.
func getJokes(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, jokes)
}

func findItem(arr []joke, id string) (joke, error) {
	for _, item := range arr {
		if item.ID == id {
			return item, nil
		}
	}
	return joke{}, errors.New("item not found")
}

func getJoke(c *gin.Context) {
	id := c.Param("id")

	found, err := findItem(jokes, id)

	fmt.Println("found", found)

	if err != nil {
		fmt.Println("Something went wrong")
	}

	c.IndentedJSON(http.StatusOK, found)
}

func addJoke(c *gin.Context) {

	var newJoke joke

	if err := c.BindJSON(&newJoke); err != nil {
		return
	}

	jokes = append(jokes, newJoke)

	c.IndentedJSON(http.StatusCreated, jokes)

}

func DeleteJoke(c *gin.Context) {

	id := c.Param("id")

	newJoke := make([]joke, 0)

	// len(newJoke) == 0
	// cap(newJoke) == 0

	b := []string{"g", "o", "l", "a", "n", "g"}
	// b[1:4] == []byte{'o', 'l', 'a'}, sharing the same storage as b

	fmt.Println(c)

	fmt.Println(len(newJoke), "Length")
	fmt.Println(cap(newJoke), "Capacity")

	for _, j := range jokes {
		if j.ID != id {
			newJoke = append(newJoke, j)
		}
	}

	fmt.Println(len(newJoke), "Length")
	fmt.Println(cap(newJoke), "Capacity")

	c.IndentedJSON(http.StatusOK, newJoke)

}

func main() {
	router := gin.Default()
	router.GET("/jokes", getJokes)
	router.GET("/jokes/:id", getJoke)
	router.DELETE("/jokes/:id", DeleteJoke)
	router.POST("/jokes", addJoke)

	router.Run("localhost:8080")
}
