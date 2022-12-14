/*
 * This Groovy source file was generated by the Gradle 'init' task.
 */
package rough_work.app

import rough_work.list.LinkedList

import static rough_work.utilities.StringUtils.join
import static rough_work.utilities.StringUtils.split
import static rough_work.app.MessageUtils.getMessage

import org.apache.commons.text.WordUtils

class App {
    static void main(String[] args) {
        LinkedList tokens
        tokens = split(getMessage())
        String result = join(tokens)
        println(WordUtils.capitalize(result))
    }
}
