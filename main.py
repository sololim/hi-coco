def on_gesture_shake():
    basic.show_string("hi coco")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
